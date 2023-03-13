import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Action, State, StateContext } from "@ngxs/store";
import { ArgumentOutOfRangeError } from "rxjs";

//Actions
export class GetQuote {
    static readonly type = '[AppState] Get Quote'
    constructor(){}
}
export class NextStep {
    static readonly type ="[AppState] Next Step"
    constructor(){}
}

export interface AppStateModel {
    currentStep: number
}


@State<AppStateModel>({
    name: 'appState',
    defaults: {
        currentStep: 1
    }
})
@Injectable()
export class AppState {
    @Action(GetQuote)
    getQuote(ctx: StateContext<AppStateModel>){
        const state = ctx.getState();
        ctx.patchState({currentStep: 2});
    }

    @Action(NextStep)
    nextStep(ctx: StateContext<AppStateModel>){
        const state = ctx.getState();
        const currentStep = state.currentStep;
        console.log(currentStep);
        ctx.patchState({currentStep: currentStep - 1})
    }
}