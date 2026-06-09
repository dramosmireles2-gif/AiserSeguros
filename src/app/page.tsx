import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import QuoteForm from "@/components/QuoteForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
