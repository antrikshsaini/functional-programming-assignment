import inquirer from "inquirer";
import { defer, repeat } from "rxjs";


// State -- Model   : a type defining the structure of state data
// init

const initState = { isOrange: false, count: 1 }
type State = typeof initState

// Actions : a type defining user events sent through mailboxes

type Action = { color: string }

// update : a pure function from previous state and an action to new state
// f: State -> Action -> State

const update = (action: Action, state: State): State => {
    if (action.color === "#FFA500") {
        return { isOrange: true, count: state.count + 1 }
    } else {
        return { isOrange: false, count: state.count + 1 }
    }
}

// View  : a pure function transforming state into rendering
// f: State -> console.log(State)

const view = (display: State) => {
    if (display.isOrange) {
        console.log("The Color is Orange", display.count)
    } else {
        console.log("The Color is not Orange", display.count)
    }
}

// Program in a loop

const source = defer(() => {

    return inquirer.prompt([
        {
            type: "input",
            name: "color",
            message: "Enter Hex Code (#FF$$$$) : "
        }
    ])
})

const program = source.pipe(repeat());

const stateArray: Array<State> = [initState]

const subscription = program.subscribe((cmd: Action) => {
    const latestState = stateArray[stateArray.length - 1]
    if (latestState) {
        const newState = update(cmd, latestState)
        stateArray.push(newState)
        return view(newState)
    }
})

// Different way

// const subscription = program.subscribe((cmd:Action)=> view(update(cmd,initState)))

// // Unsubscribe/kill after a duration
setTimeout(() => subscription.unsubscribe(), 100000);
