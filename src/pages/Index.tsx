
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BlogCard from '@/components/BlogCard';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  const featuredBlogs = [
    {
      title: "Name of the Blogs",
      description: "Information of the Blogs",
      featured: true
    },
    {
      title: "Name of the Blogs", 
      description: "Information of the Blogs",
      featured: true
    }
  ];

  const additionalBlogs = [
    {
      title: "Name of the Blogs",
      description: "Information of the Blogs"
    },
    {
      title: "Name of the Blogs",
      description: "Information of the Blogs"
    },
    {
      title: "Name of the Blogs",
      description: "Information of the Blogs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Blogs Section */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  Featured Blogs
                  <div className="w-16 h-1 bg-blog-orange mt-2"></div>
                </h2>
              </div>
              
              <div className="space-y-8">
                {featuredBlogs.map((blog, index) => (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                    <BlogCard {...blog} />
                  </div>
                ))}
              </div>
            </section>

            {/* See All Link */}
            <div className="text-center mb-12">
              <Button 
                variant="outline" 
                className="border-blog-orange text-blog-orange hover:bg-blog-orange hover:text-white transition-all duration-200"
              >
                SEE ALL →
              </Button>
            </div>

            {/* Additional Blogs Grid */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalBlogs.map((blog, index) => (
                  <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <BlogCard {...blog} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
