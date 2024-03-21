import { Stack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';

export default function SocialIcon() {
  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/mahnoor.khushbakht?mibextid=ZbWKwL', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/noor_khushbakht?igshid=OGQ5ZDc2ODk2ZA==', '_blank');
  };

  const handleLinkedinClick = () => {
    window.open('http://www.linkedin.com/in/mahnoorkhushbakht', '_blank');
  };

  const handleMailClick = () => {
    window.location.href = 'mailto:mahnoorkhushbakht@gmail.com';
  };

  const handleGithubClick = () => {
    window.open('https://github.com/MahnoorKhushbakht', '_blank');
  };

  return (
    <Stack
    spacing={4}
    marginRight={4}
    direction='column'
    position="fixed" // Stick to the viewport
    right={0} // Position on the right side
    top="50%"
    transform="translateY(-50%)" // Center vertically
    zIndex="banner" // Ensure it's above most elements
  >
      <IconButton
        variant='solid'
        aria-label='Facebook'
        backgroundColor='#4F4A45'
        color='#F6F1EE'
        fontSize='20px'
        size='md'
        icon={<FaFacebook />}
        onClick={handleFacebookClick}
      />

      <IconButton
        variant='solid'
        backgroundColor='#4F4A45'
        color='#F6F1EE'
        aria-label='Instagram'
        fontSize='20px'
        size='md'
        icon={<FaInstagram />}
        onClick={handleInstagramClick}
      />

      <IconButton
        variant='solid'
        backgroundColor='#4F4A45'
        color='#F6F1EE'
        aria-label='LinkedIn'
        fontSize='20px'
        size='md'
        icon={<FaLinkedin />}
        onClick={handleLinkedinClick}
      />

      <IconButton
        variant='solid'
        backgroundColor='#4F4A45'
        color='#F6F1EE'
        aria-label='Github'
        fontSize='25px'
        size='md'
        icon={<FaGithub />}
        onClick={handleGithubClick}
      />

      <IconButton
        variant='solid'
        backgroundColor='#4F4A45'
        color='#F6F1EE'
        aria-label='Mail'
        fontSize='20px'
        size='md'
        icon={<FaEnvelope />}
        onClick={handleMailClick}
      />
    </Stack>
  );
}
