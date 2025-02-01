import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Yep! This is me, Piira 🤓</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a skilled IT professional that loves{" "}
        <Highlight><strong>building products</strong></Highlight> that can impact
        millions of lives
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a digital transformation specialist with over{" "}
        <Highlight>5 years of experience</Highlight> in business process automation,
        business performance optimization, and digital transformation.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
