import { TestBed } from '@angular/core/testing';
import { FocusComponent } from './focus.component';
describe('FocusComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [FocusComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(FocusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=focus.component.spec.js.map