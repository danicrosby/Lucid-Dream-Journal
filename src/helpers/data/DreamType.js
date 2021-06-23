/* eslint-disable max-len */
import React from 'react';
import lucid from '../../styles/Assets/lucid.png';
import nightmare from '../../styles/Assets/nightmare.png';
import good from '../../styles/Assets/good.png';
import prem from '../../styles/Assets/prem.png';

const DreamType = {
  Nightmare: {
    interpretation: 'dreams are disturbing dreams that causes you to wake up feeling anxious and frightened. Nightmares may be a response to real life trauma and situations. These type of nightmares fall under a special category called Post-traumatic Stress Nightmare (PSN). Nightmares may also occur because you have ignored or refused to accept a particular life situation. Research shows that most people who have regular nightmares have a family history of psychiatric problems, are involved in a rocky relationship or have had bad drug experiences. These people may have also contemplated suicide.  Nightmares are an indication of a fear that needs to be acknowledged and confronted. It is a way for the subconscious to wake up and take notice. "Pay attention!"',
    icon: <img src={nightmare} height={25} width={25} />,
    color: '#333'
  },
  Good: {
    interpretation: 'GOOD may be a way for your unconscious to get your attention about a situation or problem that you have been avoiding. It is time to take notice and confront the issue! Sometimes nightmares serve to warn you about your health or an accident. However, often times nightmares stem from a deeper level indicating that something is troubling you from within your subconscious.  Discussing, analyzing, and understanding your nightmares can lead to a solution to some problem, internal conflict or personal difficulty.',
    icon: <img src={good} height={25} width={25} />,
    color: '#5555'
  },
  Lucid: {
    interpretation: 'dreams occur when you realize you are dreaming. "Wait a second. This is only a dream!" Most dreamers wake themselves up once they realize that they are dreaming. Other dreamers have cultivated the skill to remain in the lucid state of dreaming. They become an active participant in their own dreams, making decisions in their dreams and influencing the dream outcome without awakening.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#555'
  },
  Premonition: {
    interpretation: 'dreams, also referred to as precognitive or psychic dreams, are dreams that seemingly foretell the future.  One rational theory to explain this phenomenon is that your dreaming mind is able to piece together bits of information and observation that you may normally overlook or that you do not seriously consider. In other words, your unconscious mind knows what is coming before you consciously piece together the same information',
    icon: <img src={prem} height={30} width={30} style={{ marginBottom: -2 }} />,
    color: '#6666'
  },
  Recurring: {
    interpretation: 'dreams repeat themselves with little variation in story or theme.  These dreams may be positive, but most often they are nightmarish in content.  Dreams may recur because a conflict depicted in the dream remains unresolved or  ignored. Once you find a resolution to the problem, your recurring dreams will cease.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#777'
  },
  Frustrating: {
    interpretation: 'dreams represents feelings about difficulties, challenges, or obstacles you are having. Feeling annoyed by someone or something. Too much willingness to accept a problem. Keeping your frustration or anger bottled up. Anxiety about communicating your true feelings that is causing a problem to get worse. Being too nice or respectful to someone that is causing problems. Ignoring your own happiness to keep others happy. Sensitivity about something you like not being as easy as you think it should be. Feeling that others are not helping out. Frustration that someone or something is holding you back in life.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#8888'
  },
  Unsettling: {
    interpretation: 'RECURRING may be a way for your unconscious to get your attention about a situation or problem that you have been avoiding. It is time to take notice and confront the issue! Sometimes nightmares serve to warn you about your health or an accident. However, often times nightmares stem from a deeper level indicating that something is troubling you from within your subconscious.  Discussing, analyzing, and understanding your nightmares can lead to a solution to some problem, internal conflict or personal difficulty.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#999'
  },
  Funny: {
    interpretation: 'RECURRING may be a way for your unconscious to get your attention about a situation or problem that you have been avoiding. It is time to take notice and confront the issue! Sometimes nightmares serve to warn you about your health or an accident. However, often times nightmares stem from a deeper level indicating that something is troubling you from within your subconscious.  Discussing, analyzing, and understanding your nightmares can lead to a solution to some problem, internal conflict or personal difficulty.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#1111'
  },
  Epic: {
    interpretation: 'dreams, also referred to as Great Dreams, Cosmic Dreams or Numinous Dreams, are so huge, so compelling, and so vivid that you cannot ignore them. The details of such dreams remain with you for years, as if you just dreamt it last night. These dreams possess much beauty and contain many archetypal symbology.  When you wake up from such a dream, you feel that you have discovered something profound or amazing about yourself or about the world. It feels like a life-changing experience.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#222'
  },
  Daydreams: {
    interpretation: 'are classified as a level of consciousness between sleep and wakefulness.  Studies show that you have the tendency to daydream an average of 70-120 minutes a day. It occurs during waking hours when you let your imagination carry you away. As your mind begins to wander and your level of awareness decreases, you lose yourself in your imagined scenario and fantasy.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#1111'
  },
};
export default DreamType;
