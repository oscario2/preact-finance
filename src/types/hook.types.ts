export interface IDispatch<S, A> {
    state: S;
    dispatch: (action: A) => void; // function as property or method declaration
}
