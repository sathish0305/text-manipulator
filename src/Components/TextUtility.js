import React from 'react'

function TextUtility() {
    return (
        <>
            <div className="container-fluid py-3 d-md-flex align-items-center" style={{ height: "92dvh" }}>
                <div className="container" style={{ height: "50%" }}>
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                            style={{ height: "13rem" }}></textarea>
                        <label htmlFor="floatingTextarea2">Type or Paste your text here</label>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex align-items-center justify-content-around flex-wrap">
                            <button type="button" className="btn btn-primary m-1">Lowercase</button>
                            <button type="button" className="btn btn-primary m-1">Uppercase</button>
                            <button type="button" className="btn btn-primary m-1">Capitalize</button>
                            <button type="button" className="btn btn-primary m-1">Clean Spaces</button>
                        </div>
                    </div>

                </div>
                <div className="container" style={{ height: "50%" }}>
                    <div class="form-floating mb-3">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style={{ height: "13rem" }} disabled></textarea>
                        <label for="floatingTextarea2Disabled">Your result text</label>
                    </div>
                    <div className="d-flex">
                        <div className="d-flex align-items-center justify-content-around flex-wrap">
                            <button type="button" className="btn btn-primary m-1">Copy</button>
                            <button type="button" className="btn btn-primary m-1">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextUtility
