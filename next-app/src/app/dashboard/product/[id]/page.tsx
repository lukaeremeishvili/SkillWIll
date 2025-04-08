"use client";
import { useParams } from "next/navigation";
import { notFound } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();

  const isValid = id === '1' || id === '2'; 

  if (!isValid) {
    notFound();
  }
  
  return (
    <div>
      <h1> Single Product {id}</h1>
    </div>
  );
}
