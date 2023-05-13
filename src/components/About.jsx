import React from 'react';

function About() {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        About
                    </p>
                </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa, expedita voluptatibus nisi reiciendis porro corporis rem quidem incidunt et facere nam ullam similique molestiae eveniet! Quia in alias tempora maiores voluptatibus quae repudiandae quas et nobis nam, consectetur doloremque ratione accusamus similique molestiae omnis officia vero earum qui eligendi!
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit tempore exercitationem tenetur aspernatur mollitia blanditiis sit atque cupiditate deleniti molestias, reiciendis praesentium quis? Magnam modi nisi illum obcaecati dignissimos repudiandae ex laudantium dolore, natus quisquam possimus voluptates, voluptatibus, est accusamus iste. Culpa possimus tempore facere voluptates consequuntur, ex ratione esse.
                </p>
            </div>
        </div>
    )
}

export default About