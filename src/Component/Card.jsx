function Card({ icon, text }) {
  return (
    <div className="border border-blue-400 backdrop-blur-2xl bg-gray-900">
      <div className="rounded-full w-20 h-20 flex items-center justify-center bg-amber-300">
        {icon}
      </div>
      <div>{text}</div>
      <div>Learn more </div>
    </div>
  );
}

export default Card;
