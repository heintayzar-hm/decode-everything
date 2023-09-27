import { DecoderModal } from "@/components/Modal/DecoderModal";

export default function Home() {
  return (
    <main

    className='py-10 px-4'
>
  <h1
    className='m-auto w-max text-4xl font-bold text-center text-gray-900 dark:text-white'
  >Decode AES Online</h1>

  <div
    className='flex items-center justify-evenly min-h-screen py-2'
  >
    <div
      className='w-full max-w-md p-4 space-y-4 bg-white rounded-xl shadow-md dark:bg-gray-800 dark:text-white'
    >
      <DecoderModal
        btnChildren={"Decode"}
        method={"AES"}
        decoder={true}
        data={"encoded"}
      />
    </div>
    <div
      className='w-full max-w-md p-4 space-y-4 bg-white rounded-xl shadow-md dark:bg-gray-800 dark:text-white'
    >
      {/* <TextAreaWithLabel placeholder="Your message to encode" id={"encoded"} label={"Your message to encode"}
        rows={10}
        />
      <TextAreaWithLabel placeholder="Key" id={"key"} label={"Your key"} /> */}
      <DecoderModal
        btnChildren={"Encode"}
        method={"AES"}
        decoder={false}
        data={"encoded"}
      />
    </div>
  </div>
</main>
  )
}
