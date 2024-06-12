'use client';

import NextLink from 'next/link';
import React, { SetStateAction, useState } from 'react';

import { setUser } from '@/store/features/authSlice';
import { Button, Checkbox, Input, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';
import { signInUser } from '@/actions/auth-action';
import { LockIcon, MailIcon } from '@/components/icons';
import { modalMotionProps } from '@/components/primitives';
import { useAppDispatch } from '@/store/hooks';

const NavbarSignIn = () => {
  const [error, setError] = useState<string | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const dispatch = useAppDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async () => {
    setSubmitting(true);
    const userInfo = await signInUser(username, password);
    if (userInfo.isSignIn) {
      dispatch(setUser(userInfo));
    } else {
      setError('Invalid username or password.');
      console.log(error);
    }
    setSubmitting(false);
    onOpenChange();
  };

  return (
    <>
      <Button className="bg-gradient-to-tr from-violet-500 to-pink-500 text-white shadow-lg" onPress={onOpen} radius="full" size="sm">
        signIn
      </Button>

      <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center" motionProps={modalMotionProps}>
        <ModalContent>
          {(onClose) => (
            <>
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
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleLogin()}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default NavbarSignIn;
