'use client'

const Footer = ()=>{

    return(
        <>
<footer className="bg-[#1A1A1A] text-gray-300 py-12 px-6 mt-20 rounded-t-[2.5rem] relative z-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
                <h3 className="font-bold text-xl text-white mb-4">PawsomePups 🐾</h3>
                <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
                    Connecting premium, caring families with verified, responsibly raised puppy companions. Built on absolute trust, safety, and operational transparency.
                </p>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Discover Area</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                    <li><button  className="hover:text-[#FF7A59] transition-colors cursor-pointer">Browse Breeds</button></li>
                    <li><button className="hover:text-[#FF7A59] transition-colors cursor-pointer">Premium Memberships</button></li>
                    <li><a href="#" className="hover:text-[#FF7A59] transition-colors">Safety Protocols</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-white mb-4">Say Hello</h4>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">Have configuration issues? Our certified companion success guides are ready to help.</p>
                <span className="inline-block bg-[#FF7A59] text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full">
                    support@pawsomepups.com
                </span>
            </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500">
            &copy; 2026 PawsomePups Inc. Responsibly designed for modern animal lovers.
        </div>
    </footer>
        </>
    )
}
export default Footer
