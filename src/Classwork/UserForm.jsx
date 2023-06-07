import React from "react"
export function Form() {

    return (
        <>
            <Form>
                <div>
                    <label>User Name</label>
                    <input type='text' name='UserName' />

                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </Form>
        </>
    )
}