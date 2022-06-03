import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { IcEnvelope, IcWa } from "../assets/icons";
import { Input, Main } from "../components";
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
    // console.log(data);
    let message = `nama: ${data.name}%0aemail: ${data.email}%0a%0a%0a%0a${data.message}`;
    console.log(message.replace(" ", "%20"));
    message = message.replace(" ", "%20");
    const wa = `https://api.whatsapp.com/send?phone=6285157711650&text=${message}`;
    window.open(wa, "_blank");
  };
  return (
    <Main title="contant">
      <section className="grid grid-cols-2 h-[100vh]">
        <div className="flex justify-evenly flex-col">
          <div>
            <div className="text-5xl -ml-1">Let`s talk</div>
            <p>Ask us anything or just say hi...</p>
          </div>
          <div>
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
          <div className="flex justify-end items-center gap-x-4">
            {contacts.slice(1).map((contact, index) => (
              <Image
                key={index}
                src={contact.icon}
                width={25}
                height={25}
                alt={contact.alt}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <ul className="break-words">
        {contacts.map((contact, i) => (
          <li key={i} className="mt-4">
            <span className="capitalize">{contact.alt}</span> -{" "}
            <a
              href={`${
                contact.alt === "email"
                  ? "mailto:" + contact.link
                  : contact.link
              }`}
              target="__blank"
              className="underline"
            >
              {contact.link}
            </a>
          </li>
        ))}
      </ul> */}
    </Main>
  );
}
