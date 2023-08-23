import { useRouter } from 'next/router'; // Import your component for Trending
import CardSelect from '../card-select';
import TablaSolicitud from '../table-final';
// ... import other components ...

const SectionPage = () => {
  const router = useRouter();
  const { section } = router.query;

  if (section === 'Home') {
    return <CardSelect />;
  } else if (section === 'trending') {
    return <TablaSolicitud />;
  }
  // ... return other components ...

  return <div>Section not found</div>;
};

export default SectionPage;