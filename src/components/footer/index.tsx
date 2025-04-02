export default function Footer() {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Restaurants Section */}
                    <div>
                        <p className="text-[#E11010] text-sm uppercase mb-4">Restaurants</p>
                        <ul className="space-y-2">
                            <li>
                                <a href="/montmartre" className="hover:text-[#E11010] transition-colors">Montmartre</a>
                            </li>
                            <li>
                                <a href="/ternes" className="hover:text-[#E11010] transition-colors">Ternes</a>
                            </li>
                            <li>
                                <a href="/saint-georges" className="hover:text-[#E11010] transition-colors">Saint-Georges</a>
                            </li>
                        </ul>
                    </div>

                    {/* Delivery Section */}
                    <div>
                        <p className="text-[#E11010] text-sm uppercase mb-4">En livraison uniquement</p>
                        <ul className="space-y-2">
                            <li>
                                <a href="/courbevoie" className="hover:text-[#E11010] transition-colors">Courbevoie</a>
                            </li>
                        </ul>
                    </div>

                    {/* La Storia Section */}
                    <div>
                        <p className="text-[#E11010] text-sm uppercase mb-4">La storia</p>
                        <ul className="space-y-2">
                            <li>
                                <a href="/cosa-si-mangia" className="hover:text-[#E11010] transition-colors">Cosa si mangia</a>
                            </li>
                            <li>
                                <a href="/noi" className="hover:text-[#E11010] transition-colors">Noi</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
