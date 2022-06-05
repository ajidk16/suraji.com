import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { IcEnvelope, IcWa } from "../assets/icons";
import { DataHead, Input, Main } from "../components";
import { contacts } from "../utils/general";

export default function Contact() {
  const router = useRouter();
  console.log(router);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let message = `nama: ${data.name}%0aemail: ${data.email}%0a%0a%0a%0a${data.message}`;
    message = message.replace(" ", "%20");
    const wa = `https://api.whatsapp.com/send?phone=6285157711650&text=${message}`;
    window.open(wa, "_blank");
  };
  return (
    <Main height="lg:h-screen h-screen">
      <DataHead title="Contact" />
      <section className="grid gap-y-10 lg:gap-y-0 lg:grid-cols-2">
        <div className="flex justify-evenly flex-col">
          <div>
            <div className="text-5xl -ml-1">Let`s talk</div>
            <p>Ask us anything or just say hi...</p>
          </div>
          <div className="hidden lg:block">
            <a href="#" className="flex items-center gap-x-4">
              <Image src={IcWa} alt="envelope" />
              <span>0851-5771-1650</span>
            </a>
            <a href="#" className="flex items-center gap-x-4 mt-2">
              <Image src={IcEnvelope} alt="envelope" />
              <span>surajidk@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="flex justify-evenly flex-col">
          <div>
            <form
              className="flex flex-col gap-y-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-2 gap-x-4">
                <Input
                  register={register}
                  label="name"
                  name="name"
                  placeholder="John Doe"
                />
                <Input
                  register={register}
                  label="email"
                  name="email"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase">message</label>
                <textarea
                  placeholder="Hi there..."
                  {...register("message")}
                  className="border-b border-b-gray-400 py-2"
                ></textarea>
              </div>
              <div className="grid grid-cols-3">
                <button
                  type="submit"
                  className="bg-green-500 capitalize hover:bg-transparent hover:border-2 hover:py-[6px] hover:border-green-500 hover:text-black py-2 px-5 text-white rounded-lg w-full"
                >
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="flex justify-center lg:justify-end items-center gap-x-4">
        {contacts.slice(1).map((contact, index) => (
          <Image
            key={index}
            src={contact.icon}
            width={25}
            height={25}
            alt={contact.alt}
          />
        ))}
      </section>
    </Main>
  );
}
