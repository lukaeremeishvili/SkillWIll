"use client"
import { usePathname, useSearchParams } from 'next/navigation';


export default function ProductPage() {
  
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <div>
      <h1>Product</h1>
      <p>Pathname: {pathname}</p>
      <p>Search param: {searchParams.get('filter')}</p>
    </div>
  );
}