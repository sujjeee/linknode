import React from 'react'
import { BACKGROUND_OPTIONS } from './BgSnippets';
import BackgroundCard from './BackgroundCard';

interface BgThemesProps {

}

const BgThemes: React.FC<BgThemesProps> = ({ }) => {
    return (
        <div className='flex gap-4 overflow-x-scroll hide_scrollbar'>
            {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                    <BackgroundCard
                    >
                        {background.component}
                    </BackgroundCard>
                );
            })}
        </div>
    )
}

export default BgThemes

