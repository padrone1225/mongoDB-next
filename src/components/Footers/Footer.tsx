export default function Footer() {

  return (
    <>
      <footer className="bg-indigo-800 mt-auto">
        <div className="px-4 py-3 text-white mx-auto">
            <h1 className="text-2xl hidden sm:block mb-2">Footer</h1>
            <div className="flex">
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">Product</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Services</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Team</a>
                    <a href="#" className="text-xs uppercase tracking-wider">More...</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">Contact</a>
                    <a href="#" className="text-xs uppercase tracking-wider">About</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Careers</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Affiliates</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">Facebook</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Instagram</a>
                    <a href="http://in1.com" className="text-xs uppercase tracking-wider">In1.com</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Twitter</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">FAQ's</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Open</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Launch Up</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Get Started</a>
                </div>
            </div>
            <div className="text-right text-xs py-2">
                <a href="">&copy;2022 nest-next-mongo</a>
            </div>
        </div>
    </footer>
    </>
  )
}