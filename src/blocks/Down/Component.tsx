
import { Down } from '@/payload-types';
import React from 'react';


export const DownComponent: React.FC<Down & { disableInnerContainer?: boolean }> = ({ contact, officeHours, navigation, legalLinks }) => {
    return (
        <>
            <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 " >

                <div className="container mx-auto px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {contact && (

                            <div className="space-y-4">

                                <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>

                                <div className="space-y-2 text-sm">

                                    {contact.companyName && <p className="font-medium text-white">{contact.companyName}</p>}
                                    {contact.personName && <p>{contact.personName}</p>}
                                    {(contact.street || contact.zipCity || contact.country) && (

                                        <div className="mt-2">

                                            {contact.street && <p>{contact.street}</p>}

                                            <p>
                                                {contact.zipCity} {contact.country}
                                            </p>
                                        </div>
                                    )}
                                    {contact.email && (
                                        <p className="pt-2">
                                            <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                                                {contact.email}
                                            </a>
                                        </p>
                                    )}
                                    {contact.phone && (
                                        <p>
                                            <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                                                {contact.phone}
                                            </a>
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        {officeHours && (

                            <div className="space-y-4">

                                <h3 className="text-lg font-semibold text-white mb-4">Office Hours</h3>

                                <ul className="space-y-2 text-sm">

                                    {officeHours.map((oh) => (

                                        <li key={oh.id} className="flex justify-between max-w-[200px]">

                                            <span className="font-medium">{oh.day}</span>

                                            <span>{oh.time}</span>

                                        </li>

                                    ))}

                                </ul>

                            </div>
                        )}

                        {navigation && (
                            <div className="space-y-4">

                                <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>

                                <nav>
                                    <ul className="space-y-2 text-sm">
                                        {navigation.map((nav) => (
                                            <li key={nav.id}>
                                                <a
                                                    href={nav.url || '#'}
                                                    className="hover:text-white transition-colors duration-200 flex items-center gap-2"
                                                >
                                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                                    {nav.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        )}

                        {legalLinks && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                                <ul className="space-y-2 text-sm">
                                    {legalLinks.map((link) => (
                                        <li key={link.id}>
                                            <a
                                                href={link.url || '#'}
                                                className="hover:text-white transition-colors duration-200"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                        <p>&copy; {new Date().getFullYear()} {contact?.companyName || 'Company Name'}. By Developed Premkumar Savale </p>
                    </div>
                </div>
            </footer>
        </>
    );
};


