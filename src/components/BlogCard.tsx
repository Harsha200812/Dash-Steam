
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  featured?: boolean;
  small?: boolean;
}

const BlogCard = ({ 
  title = "Name of the Blogs", 
  description = "Information of the Blogs",
  imageUrl,
  featured = false,
  small = false
}: BlogCardProps) => {
  return (
    <Card className={`group overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in ${
      small ? 'h-auto' : featured ? 'h-auto lg:h-96' : 'h-80'
    }`}>
      <div className={`${featured ? 'lg:flex' : ''}`}>
        <div className={`blog-gradient ${
          featured 
            ? 'h-48 lg:h-full lg:w-1/2' 
            : small 
              ? 'h-32' 
              : 'h-48'
        } relative overflow-hidden`}>
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          )}
        </div>
        
        <CardContent className={`p-6 ${featured ? 'lg:w-1/2' : ''} flex flex-col justify-center`}>
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-200">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 text-sm lg:text-base line-clamp-3">
            {description}
          </p>
          {!small && (
            <Button 
              variant="default" 
              className="bg-blog-orange hover:bg-blog-orange-dark text-white w-fit px-6"
            >
              Read more
            </Button>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default BlogCard;
