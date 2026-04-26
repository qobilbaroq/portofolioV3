export default function TopBar() {
  return (
    <section className="flex justify-between p-4">
      <div className="flex gap-1">
        <h1>Experience:</h1>
        <div className="flex flex-col mt-0.5">
          <h2 className="text-sm">PT. Diantara Inter Media</h2>
          <h2 className="text-sm">UNIKOM Web Dev Competition</h2>
          <h2 className="text-sm">SMK Prakarya Internasional</h2>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-3">
          <h2 className="font-serif">About</h2>
          <p className="w-64 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est
            fugit numquam ea fugiat excepturi, suscipit cum explicabo aliquid
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-serif">Contact</h2>
          <p className="w-64 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est
            fugit numquam ea fugiat excepturi, suscipit cum explicabo aliquid
          </p>
        </div>
      </div>
    </section>
  );
}
