using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Move1 : MonoBehaviour
{
	int walkCycleCounter = 0;
	float rootMotionOffsetWalk = 5.2f;
	float rootMotionOffsetRun = 9.98176f;
	float startDelayCounter = 0;
	Animator animator;


	// Use this for initialization
	void Start () {
		animator = GetComponent<Animator> ();
		animator.speed = 0;
	}
	

	void LateUpdate() {
		startDelayCounter += Time.deltaTime;
		if (startDelayCounter > 3)
			animator.speed = 1;
	}


	void EndOfWalk() {
		walkCycleCounter++;
		transform.Translate (new Vector3 (0, 0, rootMotionOffsetWalk));

		if(walkCycleCounter == 3)
			animator.SetTrigger ("StartRun");
	}

	void EndOfRun() {
		walkCycleCounter++;
		transform.Translate (new Vector3 (0, 0, rootMotionOffsetRun));

		if(walkCycleCounter == 6)
		animator.SetTrigger ("Jump");
	}

	void EndOfRunJump() {
		transform.Translate (new Vector3 (0, 0, rootMotionOffsetRun));
		walkCycleCounter = 3;
		animator.SetTrigger ("StartRun");
	}
}
