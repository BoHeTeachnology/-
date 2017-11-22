export default function createMockerMiddle(done) {
    return () => ({ dispatch, getState }) => {
        return next => action => {
            let result = next(action);
            console.log("HHHHHHHHHHHHFF")
            done();
            return result;
        }

    }
}
