import Image from "next/image";

export default function Logo({ width }: { width?: number }) {
  return (
    <figure className="relative">
      <Image src="" alt="LiveScript Logo" className="text-center" fill />
    </figure>
  );
}
