import Image from "next/image";

export default function Intro() {
  return (
    <div className="relative flex flex-col my-10 gap-5 w-11/12 mx-auto ">
      <div>
        <h2>החזון שלי</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          numquam animi dicta eveniet fugit dolorum ipsam quidem! Iure corporis
          doloribus optio rem dicta neque quidem, odit deserunt ab incidunt
          voluptatibus.
        </p>
      </div>

      <div className="relative w-full h-[40vh]">
        <Image
          src="https://images.pexels.com/photos/3772616/pexels-photo-3772616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          blurDataURL="https://images.pexels.com/photos/3772616/pexels-photo-3772616.jpeg?auto=compress&cs=tinysrgb&w=78&h=25&dpr=2"
          alt="profile-img"
          fill={true}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
