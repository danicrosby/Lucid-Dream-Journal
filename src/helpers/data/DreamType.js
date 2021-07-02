/* eslint-disable max-len */
import React from 'react';
import lucid from '../../styles/Assets/lucid.png';
import nightmare from '../../styles/Assets/nightmare.png';
import good from '../../styles/Assets/good.png';
import prem from '../../styles/Assets/prem.png';
import recurring from '../../styles/Assets/recurring.png';
import daydream from '../../styles/Assets/daydream.png';
import omnious from '../../styles/Assets/ominous.png';
import angry from '../../styles/Assets/angry.png';
import epic from '../../styles/Assets/epic.png';
import funny from '../../styles/Assets/funny.png';

const DreamType = {
  Angry: {
    interpretation: 'dreams represents feelings about difficulties, challenges, or obstacles you are having. Feeling annoyed by someone or something. Too much willingness to accept a problem. Keeping your frustration or anger bottled up. Anxiety about communicating your true feelings that is causing a problem to get worse. Being too nice or respectful to someone that is causing problems. Ignoring your own happiness to keep others happy. Sensitivity about something you like not being as easy as you think it should be. Feeling that others are not helping out. Frustration that someone or something is holding you back in life. It can also mean ',
    icon: <img src={angry} height={25} width={25} />,
    color: '#653E49'
  },
  Daydreams: {
    interpretation: 'are classified as a level of consciousness between sleep and wakefulness. Studies show that you have the tendency to daydream an average of 70-120 minutes a day. It occurs during waking hours when you let your imagination carry you away. As your mind begins to wander and your level of awareness decreases, you lose yourself in your imagined scenario and fantasy.',
    icon: <img src={daydream} height={25} width={25} />,
    color: '#1111'
  },
  Bliss: {
    interpretation: 'dreams, also referred to as Great Dreams, Cosmic Dreams or Numinous Dreams, are so huge, so compelling, and so vivid that you cannot ignore them. The details of such dreams remain with you for years, as if you just dreamt it last night. These dreams possess much beauty and contain many archetypal symbology.  When you wake up from such a dream, you feel that you have discovered something profound or amazing about yourself or about the world. It feels like a life-changing experience.',
    icon: <img src={epic} height={25} width={25} />,
    color: '#E9E9ED'
  },
  Epic: {
    interpretation: 'dreams, also referred to as Great Dreams, Cosmic Dreams or Numinous Dreams, are so huge, so compelling, and so vivid that you cannot ignore them. The details of such dreams remain with you for years, as if you just dreamt it last night. These dreams possess much beauty and contain many archetypal symbology.  When you wake up from such a dream, you feel that you have discovered something profound or amazing about yourself or about the world. It feels like a life-changing experience.',
    icon: <img src={epic} height={25} width={25} />,
    color: '#E9E9ED'
  },
  'False Awakening': {
    interpretation: 'dream is a vivid and convincing dream about awakening from sleep, while the dreamer in reality continues to sleep. After a false awakening, subjects often dream they are performing daily morning routine such as showering, cooking, cleaning, eating, and using the bathroom. False awakenings, mainly those in which one dreams that they have awoken from a sleep that featured dreams, take on aspects of a double dream or a dream within a dream.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#6C657B'
  },
  'False Awakening Loop': {
    interpretation: 'dream is when a subject dreams about waking up over and over again, sometimes even up to 10 times or more without knowing which time they are actually awake.[3] At times the individual can perform actions unknowingly. The movie A Nightmare on Elm Street popularized this phenomenon. This phenomenon can be related to that of sleepwalking or carrying out actions in a state of unconsciousness.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#6C657B'
  },
  Frustrating: {
    interpretation: 'dreams represents feelings about difficulties, challenges, or obstacles you are having. Feeling annoyed by someone or something. Too much willingness to accept a problem. Keeping your frustration or anger bottled up. Anxiety about communicating your true feelings that is causing a problem to get worse. Being too nice or respectful to someone that is causing problems. Ignoring your own happiness to keep others happy. Sensitivity about something you like not being as easy as you think it should be. Feeling that others are not helping out. Frustration that someone or something is holding you back in life. It can also mean ',
    icon: <img src={angry} height={25} width={25} />,
    color: '#653E49'
  },
  Funny: {
    interpretation: 'dreams may be a way for your unconscious to get your attention about a situation or problem that you have been avoiding. It is time to take notice and confront the issue! Sometimes nightmares serve to warn you about your health or an accident. However, often times nightmares stem from a deeper level indicating that something is troubling you from within your subconscious.  Discussing, analyzing, and understanding your nightmares can lead to a solution to some problem, internal conflict or personal difficulty.',
    icon: <img src={funny} height={25} width={25} />,
    color: '#ACADBC'
  },
  Good: {
    interpretation: 'dreams may be a way for your unconscious to get your attention about a situation or problem that you have been avoiding. It is time to take notice and confront the issue! Sometimes nightmares serve to warn you about your health or an accident. However, often times nightmares stem from a deeper level indicating that something is troubling you from within your subconscious.  Discussing, analyzing, and understanding your nightmares can lead to a solution to some problem, internal conflict or personal difficulty.',
    icon: <img src={good} height={25} width={25} />,
    color: '#D2D2DA'
  },
  Lucid: {
    interpretation: 'dreams are when the dreamer is aware that they are dreaming. They may have some control over their dream. This measure of control can vary between lucid dreams. They often occur in the middle of a regular dream when the sleeping person realizes suddenly that they are dreaming. Some people experience lucid dreaming at random, while others have reported being able to increase their capacity to control their dreams.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#6C657B'
  },
  Nightmare: {
    interpretation: 'dreams are disturbing dreams that causes you to wake up feeling anxious and frightened. Nightmares may be a response to real life trauma and situations. These type of nightmares fall under a special category called Post-traumatic Stress Nightmare (PSN). Nightmares may also occur because you have ignored or refused to accept a particular life situation. Research shows that most people who have regular nightmares have a family history of psychiatric problems, are involved in a rocky relationship or have had bad drug experiences. These people may have also contemplated suicide.  Nightmares are an indication of a fear that needs to be acknowledged and confronted. It is a way for the subconscious to wake up and take notice. "Pay attention!"',
    icon: <img src={nightmare} height={25} width={25} />,
    color: '#333'
  },
  Neutral: {
    interpretation: 'dreams may be a way for your unconscious to get your attention about a situation or problem that you have been avoiding. It is time to take notice and confront the issue! Sometimes nightmares serve to warn you about your health or an accident. However, often times nightmares stem from a deeper level indicating that something is troubling you from within your subconscious.  Discussing, analyzing, and understanding your nightmares can lead to a solution to some problem, internal conflict or personal difficulty.',
    icon: <img src={good} height={25} width={25} />,
    color: '#D2D2DA'
  },
  Omnious: {
    interpretation: 'dreams reflect your concerns, fears and/or anxieties about the future. You are worried about some outcome in your waking life and want to control what is happening around you.',
    icon: <img src={omnious} height={25} width={25} />,
    color: '#653E49'
  },
  Premonition: {
    interpretation: 'dreams, also referred to as precognitive or psychic dreams, are dreams that seemingly foretell the future.  One rational theory to explain this phenomenon is that your dreaming mind is able to piece together bits of information and observation that you may normally overlook or that you do not seriously consider. In other words, your unconscious mind knows what is coming before you consciously piece together the same information',
    icon: <img src={prem} height={30} width={30} style={{ marginBottom: -2 }} />,
    color: '#7E94A0'
  },
  'Realism and Non-Realism': {
    interpretation: 'dream are when things may seem wrong: details, like the painting on a wall, not being able to talk or difficulty reading (reportedly, reading in lucid dreams is often difficult or impossible[4]). In some experiences, the subjects senses are heightened, or changed.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#6C657B'
  },
  Recurring: {
    interpretation: 'dreams repeat themselves with little variation in story or theme. These dreams may be positive, but most often they are nightmarish in content.  Dreams may recur because a conflict depicted in the dream remains unresolved or  ignored. Once you find a resolution to the problem, your recurring dreams will cease.',
    icon: <img src={recurring} height={25} width={25} />,
    color: '#45404F'
  },
  Stress: {
    interpretation: 'the actual stress that you are experiencing in your waking life. The stress has carried over into your dream state where even in your sleep, you are unable to relax. The dream may call attention to some setbacks, obstacles, self-doubts, or criticism that you are facing in some waking situation or relationship. You are on the verge of breaking down and need to take some leisure time off to distance yourself from these issues.',
    icon: <img src={lucid} height={25} width={25} />,
    color: '#254C55'
  },
  Unsettling: {
    interpretation: 'dreams reflect your concerns, fears and/or anxieties about the future. You are worried about some outcome in your waking life and want to control what is happening around you.',
    icon: <img src={omnious} height={25} width={25} />,
    color: '#653E49'
  },
};
export default DreamType;
