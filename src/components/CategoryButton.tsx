
import { Button } from '@/components/ui/button';

interface CategoryButtonProps {
  name: string;
  active?: boolean;
}

const CategoryButton = ({ name, active = false }: CategoryButtonProps) => {
  return (
    <Button 
      variant={active ? "default" : "outline"}
      className={`${
        active 
          ? 'bg-blog-orange hover:bg-blog-orange-dark text-white border-blog-orange' 
          : 'border-blog-orange text-blog-orange hover:bg-blog-orange hover:text-white'
      } transition-all duration-200 px-4 py-2 rounded-md font-medium`}
    >
      {name}
    </Button>
  );
};

export default CategoryButton;
