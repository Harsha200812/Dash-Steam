
import BlogCard from './BlogCard';
import CategoryButton from './CategoryButton';

const Sidebar = () => {
  const categories = [
    { name: 'name blog', active: true },
    { name: 'name blog', active: false },
    { name: 'name blog', active: false },
    { name: 'name blog', active: false },
  ];

  const latestPosts = [
    {
      title: "Name of the Blogs",
      description: "Information of the Blogs",
    },
    {
      title: "Name of the Blogs", 
      description: "Information of the Blogs",
    },
    {
      title: "Name of the Blogs",
      description: "Information of the Blogs",
    },
  ];

  return (
    <div className="lg:w-80 space-y-8">
      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Categories</h3>
        <div className="grid grid-cols-2 gap-3">
          {categories.map((category, index) => (
            <CategoryButton 
              key={index}
              name={category.name} 
              active={category.active}
            />
          ))}
        </div>
      </div>

      {/* Latest Posts */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Latest Posts</h3>
        <div className="space-y-6">
          {latestPosts.map((post, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
              <h4 className="font-medium text-gray-900 mb-2 hover:text-primary transition-colors duration-200 cursor-pointer">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600">{post.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Posts with Images */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Latest Posts</h3>
        <div className="space-y-4">
          <BlogCard small={true} />
          <BlogCard small={true} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
