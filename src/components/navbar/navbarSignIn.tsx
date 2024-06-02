'use client';

import NextLink from 'next/link';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, useDisclosure, Checkbox, Input, Link } from '@nextui-org/react';
import { SetStateAction, useState } from 'react';
import { signInUser } from '@/actions/actions';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/authSlice';
import { LockIcon, MailIcon } from '../icons';

export default function NavbarSignIn() {
  const [error, setError] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const signInModal = useDisclosure();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const handleLogin = async () => {
    setSubmitting(true);
    const user = await signInUser(username, password);
    if (user) {
      console.log(user);
      dispatch(setUser(user));
    } else {
      setError('Invalid username or password.');
      console.log(error);
    }
    setSubmitting(false);
    signInModal.onClose();
  };

  return (
    <>
      <Button
        onPress={signInModal.onOpen}
        radius="full"
        size="sm"
        className="bg-gradient-to-tr from-violet-500 to-pink-500 text-white shadow-lg"
      >
        signIn
      </Button>
      <Modal isOpen={signInModal.isOpen} onOpenChange={signInModal.onOpenChange} placement="top-center">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              value={username}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setUsername(e.target.value)}
            />
            <Input
              endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
              value={password}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setPassword(e.target.value)}
            />
            <div className="flex py-2 px-1 justify-between">
              <Checkbox
                classNames={{
                  label: 'text-small'
                }}
              >
                Remember me
              </Checkbox>
              <NextLink color="primary" href="#">
                Forgot password?
              </NextLink>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="flat" onPress={signInModal.onClose}>
              Close
            </Button>

            {/* <Button color="primary" onPress={onClose}> */}
            <Button color="primary" onPress={handleLogin}>
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
