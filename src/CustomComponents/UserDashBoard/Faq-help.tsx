"use client"
import dynamic from 'next/dynamic'
import React from 'react'

// const HOC =dynamic(()=>import("../Layout/HOC"))
import { Container, Title, Accordion } from '@mantine/core';
import '../HomePages/FaqSimple.module.css';
import { useRouter } from 'next/navigation';
import HOC from '../Layout/HOC';

const placeholder =
    'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';

//   How does i Signup? +
//   Q2. What methods of payment do you accept? +
//   Q3. How do i cancel myself as a Franchise Partner? +
//   Q4. What do you mean by? +
//   Q5. How do i retrieve my username or password? +
//   Q6. What is? +
//   Q7. How do i update my account information? +
//   Q8. What if i not receive my payment +
//   Q9. How will be i beneficial by partner with you?
interface FaqHelpProps{
    Faq:String
}
const FaqHelp:React.FC<FaqHelpProps> = ({Faq}) => {
    const router=useRouter()
    return (
        <div className='flex w-[100%] flex-col items-start space-y-[20px]' >
            <Container size="sm" className="wrap py-[50px] w-[60%]">
                <div className='mb-[20px]'>
                    <Title ta="center" className="title">
                        Frequently Asked Questions
                    </Title>
                </div>


                <Accordion variant="separated">
                    <Accordion.Item className="item" value="reset-password">
                        <Accordion.Control>How does i Signup?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className="item" value="another-account">
                        <Accordion.Control>What methods of payment do you accept?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className="item" value="newsletter">
                        <Accordion.Control>How do i cancel myself as a Franchise Partner?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className="item" value="credit-card">
                        <Accordion.Control>What do you mean by?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item className="item" value="payment">
                        <Accordion.Control>How do i retrieve my username or password?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className="item" value="payment">
                        <Accordion.Control>What is? </Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className="item" value="payment">
                        <Accordion.Control>How do i update my account information?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className="item" value="payment">
                        <Accordion.Control>What if i not receive my payment</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>
                    <Accordion.Item className="item" value="payment">
                        <Accordion.Control>How will be i beneficial by partner with you?</Accordion.Control>
                        <Accordion.Panel>{placeholder}</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <div className='flex flex-col w-[53%] mx-auto items-start space-y-[10px] pb-[40px]' >
                <p className='className="font-bold text-center text-2xl leading-8 text-[#1E1E1E]"'> Still not found what you were looking for?</p>
                <p className="font-bold text-center text-xl leading-8 text-[#37B6FF] cursor-pointer" onClick={()=>router.push('/TicketRaise')}>Raise your ticket now to get help</p>


            </div>

        </div>
    )
}

export default HOC(FaqHelp)