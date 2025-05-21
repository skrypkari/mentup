import React from 'react';

interface NewsCardProps {
  title: string;
  date: string;
  tags: string[];
  imageSrc?: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, tags, imageSrc }) => (
  <div className="bg-[#252129] rounded-[16px] overflow-hidden max-w-[400px] flex flex-col">
    <img src={imageSrc} alt="News" className="w-full h-[242px] object-cover" />
    <div className='bg-[#252129] px-[15px] py-[10px] flex flex-col'>
      <span
        className="font-medium text-[24px] uppercase overflow-hidden"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          lineHeight: '1.2',
        }}
        title={title}
      >
        {title}
      </span>
      <div className='flex items-start justify-between mt-[10px]'>
        <div className='flex flex-col gap-[10px]'>
          <div className='flex flex-wrap items-center gap-[8px]'>
            {tags.map((tag, index) => (
              <div className='flex items-center gap-[2px] p-[4px] bg-[#4E3F5E] rounded-[6px]' key={index}>
                <div className='bg-[#8142F6]/40 w-[14px] h-[14px] rounded-[6px]'/>
                <span className='font-medium text-[10px]'>{tag}</span>
              </div>
            ))}
          </div>
          <span className='text-[10px] text-white/60'>{date}</span>
        </div>
        <button className='uppercase bg-gradient-to-br from-[#A3A3CF] to-[#8142F6] h-[40px] min-w-[133px] text-center rounded-[8px] text-[16px] font-bold'>
          подробнее
        </button>
      </div>
    </div>
  </div>
);

export default NewsCard;
