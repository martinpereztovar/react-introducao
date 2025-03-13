export default function PerfilButton({link, titulo}) {
  return (
    <div>
      <a 
      href={link}
      className="w-full leading-[40px] block bg-myGrey-700 text-white font-bold 
      rounded-md 
      text-center mb-3" target="_blank">
        {titulo}
      </a>
    </div>
  )
}
