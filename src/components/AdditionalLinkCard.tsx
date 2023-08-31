import React, { FC } from 'react'
import { Icon } from '@iconify/react';

interface AdditionalLinkCardProps {
    label: string;
    url: string;
    icon?: string;
}
const AdditionalLinkCard: FC<AdditionalLinkCardProps> = ({ label, url, icon }) => {
    return (
        <li>
            {label && url && (
                <a href={url} target="_blank">
                    <dt className="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-slate-100 bg-slate-50">
                        <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500">
                            <Icon icon="ph:link-simple" className='h-5 w-5' />
                            {/* {icon ? (
                                <Icon icon={icon} className='h-5 w-5' />
                            ) : (
                                <Icon icon="ph:link-simple" className='h-5 w-5' />
                            )} */}
                        </div>
                        <div className="w-full flex-grow min-w-0">
                            <p className="font-medium text-sm leading-6 text-gray-900">
                                {label}
                            </p>
                        </div>
                    </dt>
                </a>
            )}
        </li>
    )
}

export default AdditionalLinkCard