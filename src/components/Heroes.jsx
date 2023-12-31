import React from 'react'
import Image from 'next/image'

const Heroes = () => {
    return (
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <div class="-m-1 flex flex-wrap md:-m-2">
                <div class="flex w-full md:w-1/2 flex-wrap">
                    <div class="w-full md:w-1/2 p-1 md:p-2">
                        <Image
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/Image/Photos/Horizontal/Nature/4-col/Image%20(70).webp"
                        />
                    </div>
                    <div class="w-full md:w-1/2 p-1 md:p-2">
                        <Image
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/Image/Photos/Horizontal/Nature/4-col/Image%20(72).webp"
                        />
                    </div>
                    <div class="w-full p-1 md:p-2">
                        <Image
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/Image/Photos/Horizontal/Nature/4-col/Image%20(73).webp"
                        />
                    </div>
                </div>
                <div class="flex w-full md:w-1/2 flex-wrap">
                    <div class="w-full p-1 md:p-2">
                        <Image
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/Image/Photos/Horizontal/Nature/4-col/Image%20(74).webp"
                        />
                    </div>
                    <div class="w-full md:w-1/2 p-1 md:p-2">
                        <Image
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/Image/Photos/Horizontal/Nature/4-col/Image%20(75).webp"
                        />
                    </div>
                    <div class="w-full md:w-1/2 p-1 md:p-2">
                        <Image
                            alt="gallery"
                            class="block h-full w-full rounded-lg object-cover object-center"
                            src="https://tecdn.b-cdn.net/Image/Photos/Horizontal/Nature/4-col/Image%20(77).webp"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Heroes