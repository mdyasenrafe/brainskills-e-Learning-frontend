import React from 'react';

const invo = () => {
    return (
        <div className='container mx-auto px-4 my-10'>
            <div className='border-double border-4 border-indigo-600 p-10'>
                <div className='flex justify-between items-start'>
                    <div>
                        <h1 className='text-2xl font-bold'>Invoice #0472</h1>
                    </div>
                    <div className='text-right'>
                        {/* <img className="w-2/4" src="./logo.png" alt="" /> */}
                        <h1 className='text-1xl font-bold'>LOGO</h1>
                        <h1 className='text-1xl font-bold'>Themesberg Inc.</h1>
                        <h1 className='text-sm '>291 N 4th St, San Jose, CA 95112, USA</h1>
                        <h1 className='text-sm '>August 1, 2021</h1>
                    </div>
                </div>
                <div className='my-4'>
                    <h1 className='text-1xl font-bold uppercase'>BILL TO : </h1>
                    <p className=''>
                        Themesberg Inc., LOUISVILLE, Selby 3864 Johnson Street, United States of America VAT Code: AA-1234567890
                    </p>
                </div>
                <hr />
                <div className='my-4'>
                    <table class="w-full">
                        <thead className='my-4'>
                            <tr className='text-left '>
                                <th>Item</th>
                                <th>Price</th>
                                <th>QTY</th>
                                <th>OFF</th>
                                <th>Total</th>
                            </tr>
                        </thead>

                        <tbody className=''>
                            <tr>
                                <td>Web Design</td>
                                <td>199 $</td>
                                <td>01</td>
                                <td>10%</td>
                                <td>199</td>
                            </tr>
                            <tr>
                                <td>Web Design</td>
                                <td>199 $</td>
                                <td>01</td>
                                <td>10%</td>
                                <td>199</td>
                            </tr>
                            <tr>
                                <td>Web Design</td>
                                <td>199 $</td>
                                <td>01</td>
                                <td>10%</td>
                                <td>199</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <hr />
                <div className='flex justify-end my-4'>
                    <table class="w-1/3">
                        <tbody className=''>
                            <tr className='text-left '>
                                <td>SUBTOTAL</td>
                                <td>$415.00</td>
                            </tr>
                            <tr>
                                <td>TAX RATE</td>
                                <td>5%</td>

                            </tr>
                            <tr>
                                <td>DISCOUNT</td>
                                <td>$64.00</td>
                            </tr>
                            <tr>
                                <td>TOTAL</td>
                                <td>$351.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr />
                <div className='text-center my-4'>
                    <p>917/4 Dhanmondi, Tejgaon, Dhaka-1208, Call: +8801777777</p>
                </div>
            </div>
        </div>
    );
};

export default invo;