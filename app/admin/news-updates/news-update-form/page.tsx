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
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState(' ');
  const [description, setNewsDescription] = useState('');
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
      const response = await fetch('http://localhost:3000/api/delete-image', {
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
    } catch (error:any) {
      console.log('image choluld not deteled', error);
      toast.error('Error removing image');
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Trim and format the slug before sending it to the server
    const formattedSlug = slug
      .trim() // Remove leading and trailing whitespace
      .toLowerCase() // Convert the slug to lowercase
      .replace(/[^\w\s]+/g, '') // Remove special characters (keep alphanumeric and spaces)
      .replace(/\s+/g, '-') // Replace spaces with hyphens

    const res = await fetch('/api/news-upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, imageUrl, publicId, category, slug: formattedSlug, description, }),
    });
    const toastId = toast.loading('Please wait...');
    if (res.ok) {
      // const data = await res.json();
      toast.success('news added successfully', { id: toastId })
      setTitle('');
      setContent('');
      setImageUrl('');
      setPublicId('');
      setCategory('');
      setNewsDescription('');
      setSlug('');
    } else {
      // const errorData = await res.json();
      toast.error('Somethink went wrong please try again', { id: toastId })
    }
  };
  const config = useMemo(() => ({
    readonly: false,
    placeholder: 'Start typing you content...',
  }), []);


  return (
    <div className="w-[75%] px-10">
      <h1 className='mt-5 rounded-xl text-center py-6 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500'>
        <span className="bg-gradient-to-b from-gray-50  via-blue-100 to-blue-500 inline-block text-transparent bg-clip-text text-5xl font-medium ">Add You News Here</span>
      </h1>

      <section className="pb-5 md:px-10 flex justify-center pt-5">
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
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
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
              value={description}
              onChange={(e) => setNewsDescription(e.target.value)}
              required
              placeholder="write a small description of you content"
              className="w-full px-3 py-1 border border-gray-300 rounded-xl focus:outline-none bg-gray-100"
            />
          </div>
          {/* category */}
          <div className='pb-2 '>
            <label htmlFor="category" className="flex text-blue-950 mb-1 gap-1">
              Category <span className="text-red-700">*</span>
            </label>
            <select
              id="category"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-1 border border-gray-300 rounded-xl bg-gray-100 appearance-none pr-10"
            >
              <option value="">
                Choose a Category
              </option>
              <Category />
            </select>
          </div>
          <div className="pb-2 z-20">
            <label htmlFor="content" className="flex text-blue-950 mb-1 gap-1">
              Content <span className="text-red-700">*</span>
            </label>
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
              uploadPreset='sommet-infra'>
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
      </section>
    </div >
  )
}