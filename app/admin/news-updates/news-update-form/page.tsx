'use client'
import Image from 'next/image'
import { toast, } from 'react-hot-toast';
import { useState, useRef, useMemo } from "react";
import { CldUploadButton, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { IoMdImage } from "react-icons/io";
import dynamic from 'next/dynamic';
import Category from '../../components/Category';

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

export default function NewsForm() {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [publicId, setPublicId] = useState('');

  function handleImageUpload(result: CloudinaryUploadWidgetResults) {
    console.log('result: ', result)
    const info = result.info as object
    if ("public_id" in info && "secure_url" in info) {
      const secure_url = info.secure_url as string
      const public_id = info.public_id as string
      setImageUrl(secure_url);
      setPublicId(public_id);
      toast.success('Image Upload sucessfully')
      console.log('secure_url: ', secure_url);
      console.log('public_id: ', public_id);
    } else {
      toast.error("Failed to upload image");
    }
  }
  const removeImg = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/delete-image', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ publicId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete the image');
      }
      setImageUrl("");
      setPublicId("");
      toast.success("project successfully deletd")
      console.log("project successfully deletd")
    } catch (error) {
      console.log(error);
      toast.error('Error removing image');
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/create-news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, imageUrl, publicId }),
    });
    const toastId = toast.loading('Please wait...');
    if (res.ok) {
      const data = await res.json();
      toast.success('news added successfully', { id: toastId })
      setTitle('');
      setContent('');
      setImageUrl('');
      setPublicId('');
    } else {
      const errorData = await res.json();
      toast.error('Somethink went wrong please try again', { id: toastId })
    }
  };
  const config = useMemo(() => ({
    readonly: false, // all options from https://xdsoft.net/jodit/docs/
    placeholder: 'Start typing you content...',  // You can set a default value here
  }), []);


  return (
    <div className="w-[75%]">
      <h1 className="text-2xl pb-5 px-5 font-medium pt-10">Add You News Here</h1>
      <div className="pb-5 md:px-10 flex justify-center">
        <form onSubmit={handleSubmit} className="px-5 border-2 border-blue-500 rounded-xl  w-[70%]">
          <div className="pb-2 pt-5">
            <label htmlFor="title" className="flex text-blue-950 mb-1 gap-1">
              News Title <span className="text-red-700">*</span>
            </label>
            <input
              type='text'
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Your Project Title.."
              className="w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
            />
          </div>
          <div className="pb-2">
            <label htmlFor="newsSlug" className="flex text-blue-950 mb-1 gap-1">
              News Slug <span className="text-red-700">*</span>
            </label>
            <input
              type='text'
              id="newsSlug"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="News Slug, which is a URL shown on screen when you open this page."
              className="w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
            />
          </div>
          <div className="pb-2 ">
            <label htmlFor="newsDescription" className="flex text-blue-950 mb-1 gap-1">
              News description <span className="text-red-700">*</span>
            </label>
            <input
              type='text'
              id="newsDescription"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="write a small description of you content"
              className="w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
            />
          </div>

           <div className='pb-2 mt-3'>
            <select
              id="year"
              required
              // value={ category }
              // onChange={(e) => setYear(e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-xl bg-gray-100 appearance-none pr-10"
            >
              <option value="">
                Choose a Category <span className="text-red-700">*</span>
              </option>
              <Category />
            </select>
          </div> 

          <div className="pb-2 z-20">
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={setContent}
              className='w-full overflow-x-hidden bg-gray-100'
            />
          </div>
          <div className='pb-2 w-full '>
            <CldUploadButton
              className={`w-full border-2 border-dotted grid h-48 place-items-center bg-slate-100 rounded-2xl relative ${imageUrl && 'pointer-events-none'}`}
              onSuccess={handleImageUpload}
              uploadPreset='eclat-engineering'>
              <div>
                <IoMdImage className='text-3xl' />
              </div>
              {imageUrl && <Image
                src={imageUrl}
                fill
                alt={title}
                className='absolute object-cover inset-0 rounded-2xl'
              />}
            </CldUploadButton>
          </div>
          {publicId && <button onClick={removeImg} className='px-4 py-2 rounded-md text-white font-normal bg-red-600'>Remove image</button>}
          <div className="flex justify-center rounded-2xl pb-2 mt-4">
            <input
              type="submit"
              value="Submit"
              className="w-1/4 py-1.5 px-5 rounded-xl hover:text-blue-400 hover:border-blue-400 border-2  hover:bg-gray-50 cursor-pointer bg-blue-400 text-gray-50"
            />
          </div>
        </form>
      </div >
    </div >
  )
}