export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message:string) {
        //Calling super() is the same as calling new Error()
        //We insert message here just for logging purposes
        super(message)
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    abstract serializeErrors(): { message: string; field?: string }[];

}