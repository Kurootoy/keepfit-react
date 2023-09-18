import React from 'react'
import { AiFillEdit } from 'react-icons/ai'

const User = () => {
    return (
        <>
            <div className=" bg-white pt-[80px]  min-h-screen ">
                <div className="px-36">
                    <div className="bg-gray-200 h-auto rounded-2xl flex-col justify-center items-center ">
                        <div className="flex justify-center py-8">
                            <img
                                className="w-[300px] h-[300px] object-cover rounded-full border-4 border-primary"
                                src="data:image/jpeg;base64,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"
                                alt=""
                            />
                        </div>

                        <div className="flex justify-center">
                            <div className="form-control w-full max-w-sm">
                                <div className='flex justify-end max-w-sm'>
                                    <button className="btn btn-primary text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>Edit<AiFillEdit /></button>
                                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-2xl ">Edit your profile</h3>
                                            <div className="form-control w-full pt-3">
                                                <label className="label">
                                                    <span className="label-text text-primary font-semibold text-[16px]">First Name</span>
                                                </label>
                                                <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                                            </div>
                                            <div className="form-control w-full pt-3">
                                                <label className="label">
                                                    <span className="label-text text-primary font-semibold text-[16px]">Last Name</span>
                                                </label>
                                                <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                                            </div>
                                            <div className="form-control w-full pt-3">
                                                <label className="label">
                                                    <span className="label-text text-primary font-semibold text-[16px]">Date of birth</span>
                                                </label>
                                                <input type="date" className="input input-bordered w-full text-gray-400" />
                                            </div>
                                            <div className="form-control w-full pt-3">
                                                <label className="label">
                                                    <span className="label-text text-primary font-semibold text-[16px]">Weight (Kg)</span>
                                                </label>
                                                <input type="text" placeholder="Weight" className="input input-bordered w-full" />
                                            </div>
                                            <div className="form-control w-full pt-3">
                                                <label className="label">
                                                    <span className="label-text text-primary font-semibold text-[16px]">Height (Cm)</span>
                                                </label>
                                                <input type="text" placeholder="Height" className="input input-bordered w-full" />
                                            </div>

                                            <div className="form-control w-full pt-3">
                                                <label className="label">
                                                    <span className="label-text text-primary font-semibold text-[16px]">Gender</span>
                                                </label>
                                                <select className="select select-bordered text-gray-400">
                                                    <option disabled selected>None</option>
                                                    <option>Female</option>
                                                    <option>Male</option>
                                                    <option>Not specified</option>
                                                </select>
                                            </div>

                                            <div className="modal-action">
                                                <form method="dialog">
                                                    {/* if there is a button in form, it will close the modal */}
                                                    <button className="btn btn-primary text-white">Save</button>
                                                </form>
                                            </div>
                                        </div>
                                    </dialog>
                                </div>
                                <label className="label">
                                    <span className="label-text text-primary font-bold text-lg">First Name : </span>
                                </label>
                                <div className="bg-white text-start ps-2 p-2 rounded-md">
                                    <h1>First Name</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <div className="form-control w-full max-w-sm">
                                <label className="label">
                                    <span className="label-text text-primary font-bold text-lg">Last Name</span>
                                </label>
                                <div className="bg-white text-start ps-2 p-2 rounded-md">
                                    <h1>Last Name</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <div className="form-control w-full max-w-sm">
                                <label className="label">
                                    <span className="label-text text-primary font-bold text-lg">Age</span>
                                </label>
                                <div className="bg-white text-start ps-2 p-2 rounded-md">
                                    <h1>Age</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <div className="form-control w-full max-w-sm">
                                <label className="label">
                                    <span className="label-text text-primary font-bold text-lg">Weight</span>
                                </label>
                                <div className="bg-white text-start ps-2 p-2 rounded-md">
                                    <h1>Weight</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4">
                            <div className="form-control w-full max-w-sm">
                                <label className="label">
                                    <span className="label-text text-primary font-bold text-lg">Height</span>
                                </label>
                                <div className="bg-white text-start ps-2 p-2 rounded-md">
                                    <h1>Height</h1>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center pt-4 pb-8">
                            <div className="form-control w-full max-w-sm">
                                <label className="label">
                                    <span className="label-text text-primary font-bold text-lg">Gender</span>
                                </label>
                                <div className="bg-white text-start ps-2 p-2 rounded-md">
                                    <h1>Gender</h1>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>

    )
}

export default User