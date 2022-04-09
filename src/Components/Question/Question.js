import React from 'react'


export const Question = () => {
    return (
        <div>
             <div class="container">
            <div class="row justify-content-md-center">

                <div class="col-md-auto">
                    <div class="new">
                        <article id="article3">
                            <h3>Ingin Bertanya-tanya? silahkan isi form dibawah</h3>
                        </article>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Alamat Email</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email"/>
                    </div>
                    <div class="mb-3">

                        <label for="formGroupExampleInput2" class="form-label">Tanya-tanya</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="d-grid gap-2">
                        <button href="rezkytaewa2@gmail.com" class="btn btn-primary" type="button">Kirim</button>

                    </div>

                </div>

            </div>

        </div>
        </div>
    )
}
