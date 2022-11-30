import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import './AddProduct.css'


const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email } = user;
    const navigate = useNavigate();

    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;

        const img = form.img.value;
        const price = form.price.value;
        const description = form.description.value;
        const name = form.name.value;
        const categoryId = form.categoryId.value;
        const title = form.title.value;
        const used = form.used.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const product = {
            img,
            price,
            description,
            seller: displayName,
            email,
            name,
            categoryId,
            title,
            used,
            condition,
            location
        }
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success('product added sucessfully')
                    // Navigate('/dashboard/myproducts')
                    navigate('/dashboard/myproducts')
                }
            })
            .catch(error => console.error(error));
        }

    return (
        <div className="flex items-center justify-center flex-col lg:flex-row p-12 max-w-screen-xl mx-auto " >
            {/* <div>
                <img className='w-2/4 mx-auto lg:w-3/5' src={img1} alt=''></img>
            </div> */}
            <div className="mx-auto w-full max-w-auto px-8 bg-blue-50 ">
            <h2 className='text-3xl text-center font-bold my-10 text-blue-500'>Add Products</h2>
                <form onSubmit={handleAddProduct} className='my-20 '  >
                    

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Seller Name</label>
                        <input type="text" name="seller" value={displayName} disabled placeholder="Seller Name" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Seller Email</label>
                        <input type="email" name="sellerEmail" value={email} disabled placeholder="Seller Email" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Product Name</label>
                        <input type="text" name="name" placeholder="Enter Name" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>
                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Location</label>
                        <input type="text" name="location" placeholder="Enter Name" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Category ID (Iphone = 1, Samsung = 2, Oneplus = 3)</label>
                        <input type="text" name="categoryId" placeholder="Enter Category Id" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Price</label>
                        <input type="text" name="price" placeholder="Enter Price" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Original Price</label>
                        <input type="text" name="originalPrice" placeholder="Enter Product's Original Price" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Used Time</label>
                        <input type="text" name="used" placeholder="Enter How Long You Used The Product" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Product Condition</label>
                        <input type="text" name="condition" placeholder="Enter Product Condition" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">ImageURL</label>
                        <input type="text" name="img" placeholder="Enter Photo URL" className="w-full rounded-md border border-slate-300
                     bg-white py-3 px-6 font-medium outline-none focus:border-primary focus:shadow-md" required />
                    </div>

                    <div className="mb-5">
                        <label className="mb-3 block text-xl font-semibold text-blue-500">Description</label>
                        <textarea rows="5" name="description" placeholder="Enter A Description"
                            className="w-full resize-none rounded-md border border-slate-300 bg-white py-3 px-6 outline-none font-medium  focus:border-primary focus:shadow-md" required></textarea>
                    </div>

                    </div>
                    


                   
                   <div className='flex justify-center'>
                        <input type="submit" className="btn btn-primary rounded-md py-3 px-8 text-base font-semibold text-white outline-none" value="Add Service" />
                    </div>
                   
                </form>
            </div >
        </div >
    );
};

export default AddProduct;