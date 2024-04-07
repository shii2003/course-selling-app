import React from "react";

interface CardProps {
    cardHeader: string;
    cardDescription: string;
    cardContent: string;
}

const Card: React.FC<CardProps> = ({ cardHeader, cardDescription, cardContent }) => {
    return (
        <div className="flex justify-center min-w-20">
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-white">{cardHeader}</h2>
                    <p className="text-sm text-gray-300">{cardDescription}</p>
                </div>
                <p className="text-gray-200">{cardContent}</p>
            </div>
        </div>
    );
};

export default Card;