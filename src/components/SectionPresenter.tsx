import React, { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils'; // Assuming this utility exists for class merging

interface SectionPresenterProps extends PropsWithChildren {
  title: string;
  subtitle?: string;
  id?: string;
  className?: string;
  titleContainerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentContainerClassName?: string; // Overall container for title + content, for max-width etc.
  contentClassName?: string; // Class for the direct wrapper of children
}

const SectionPresenter: React.FC<SectionPresenterProps> = ({
  title,
  subtitle,
  id,
  children,
  className,
  titleContainerClassName,
  titleClassName,
  subtitleClassName,
  contentContainerClassName,
  contentClassName,
}) => {
  console.log(`SectionPresenter loaded for section: ${title}`);

  return (
    <section
      id={id}
      className={cn(
        'py-12 md:py-16 lg:py-20', // Uniform vertical spacing between sections
        className
      )}
      aria-labelledby={id ? `${id}-title` : undefined}
    >
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', contentContainerClassName)}>
        {(title || subtitle) && (
          <div className={cn('mb-10 md:mb-12 lg:mb-16 text-center', titleContainerClassName)}>
            {title && (
              <h2
                id={id ? `${id}-title` : undefined}
                className={cn(
                  'text-3xl sm:text-4xl lg:text-5xl font-bold font-inter tracking-tight text-gray-900 dark:text-white',
                  titleClassName
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  'mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-inter',
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={cn(contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionPresenter;