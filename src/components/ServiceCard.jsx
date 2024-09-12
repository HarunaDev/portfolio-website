/* eslint-disable react/prop-types */
function ServiceCard({ text }) {
    return (
        <div className="bg-background text-light p-8 sm:p-10 md:p-12 lg:p-16 rounded mx-auto max-w-xs">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">{text}</h1>
        </div>
    );
}

export default ServiceCard;
