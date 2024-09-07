

const NewsletterSignup = () => {
    return (
        <section className="py-16 bg-gray-100 mt-5">
            <div className="container mx-auto px-6 max-w-3xl text-center">
                <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                <p className="text-xl text-gray-600 mb-8">Get the latest articles and insights delivered straight to your inbox.</p>
                <form className="flex flex-col md:flex-row gap-4">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-grow px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 text-gray-800"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-semibold"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}

export default NewsletterSignup;