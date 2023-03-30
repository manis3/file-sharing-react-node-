import {useEffect, useRef,useState} from 'react';
import './App.modules.css';
import {Flex,Box,Image,Center,Text,Button,Input,useToast,Link} from '@chakra-ui/react'
import { uploadFiles } from './services/Api';


function App() {
  const [file,setFile] = useState();
  const [result,setResult] = useState();
  const fileref = useRef(null);
  const toast = useToast();

  useEffect(() => {
    const getfiles = async () => {

     if(file){
       const formdata = new FormData();
       formdata.append('name', file.name);
       formdata.append('file', file);

       const response = await uploadFiles(formdata)
       setResult(response.path)
       if(response.status === 200){
        toast({
          title: 'Success',
          description: 'File uploaded successfully',
          status:'success',
          duration: 2000,
          isClosable: true,
        })
       }
     }
    }
    getfiles();

   },[file])

  const handleClick = () => {
    fileref.current.click();


  };
  console.log(file);
  return (
 <>
 <Flex h='973px' w='100%' overflow={'hidden'}>
  <Box name='left' className='Left' w='30%' objectFit={'cover'} overflow='hidden'> 
    <Image src={'https://wallpapercave.com/wp/utc3ePA.jpg'}/>

  </Box>
  <Center name='right' className='right' w='70%'>
    <Box w='70%' h='50%' bg='white'>
      <Text textAlign={'center'} fontSize='40px' fontFamily={'sans-serif'} color='#4c9782ad' mt='100px' >Simple File Sharing!</Text>
      <Text textAlign={'center'} mt='50px'>Upload your files and share it with your friends</Text>
      <Center><Button p={10} borderRadius='7px' bg='#0496dbc2' border={'none'} mt='50px' onClick={handleClick}>Button</Button></Center>
      <Input type='file' ref = {fileref} display='none' onChange={(e) => {setFile(e.target.files[0])}}/>
      <Link href={result} target='_blank'>{result}</Link>
     
     
      

    </Box>

  </Center>
 </Flex>
 
 </>
  );
}

export default App;
